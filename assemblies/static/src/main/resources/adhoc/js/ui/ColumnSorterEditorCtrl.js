/*! ******************************************************************************
 *
 * Pentaho
 *
 * Copyright (C) 2024 by Hitachi Vantara, LLC : http://www.pentaho.com
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file.
 *
 * Change Date: 2029-07-20
 ******************************************************************************/


ColumnSorterEditorCtrl = function()
{
	/*temp*/
	/*
	TODO: when detail etc item is already in sort list, disable add button, 
	* enable add button if an item is removed from the sort list
	* get this out of the constraint editor
	* generate mql
	* when column added to sort list and when item in sort list is edited, update the BVItem
	* when col is deelteed from sort list, return item to default sort state.
	* make sure gretchen's sort code is still valid
	* How does the sort list's order impact the MQL
	 */
	 
	this.containerElem = document.getElementById( "columnSorterEditorContainer" );
	var columnSorterTd = document.getElementById( "columnSorterTd" );
	
	// groups sorter
	this.groupColumnSorterCtrl = new ColumnSorterCtrl( ColumnSorterEditorCtrl.GROUP_COLUMN_SORTER_ID, "sortList" );
	columnSorterTd.appendChild( this.groupColumnSorterCtrl.getRoot() );
	this.groupColumnSorterCtrl.hide();
	
	this.groupColumnSorterCtrl.setEditBtnsEnabled( false );
	this.groupColumnSorterCtrl.setAddEnabled( false );
	
  this.groupColumnSorterCtrl.getRoot().title = Messages.getString( "STEP3_GROUPS_EDIT_SORT_COLUMN_TOOLTIP" );
	var btnHoverText = Messages.getString( "STEP3_CANNOT_EDIT_GROUPS_SORT" );
	this.groupColumnSorterCtrl.btnsContainerElem.title = btnHoverText;
	
	// details sorter
	this.detailColumnSorterCtrl = new ColumnSorterCtrl( ColumnSorterEditorCtrl.DETAIL_COLUMN_SORTER_ID, "sortList" );
	columnSorterTd.appendChild( this.detailColumnSorterCtrl.getRoot() );
	this.detailColumnSorterCtrl.hide();
	
  this.detailColumnSorterCtrl.getRoot().title = Messages.getString( "STEP3_DETAILS_EDIT_SORT_COLUMN_TOOLTIP" );
	var btnHoverText = Messages.getString( "STEP3_ADD_DETAILS_SORT" );
	this.detailColumnSorterCtrl.btnsContainerElem.title = btnHoverText;
}
/*static*/ColumnSorterEditorCtrl.GROUP_COLUMN_SORTER_ID = "groupColumnSorter";
/*static*/ColumnSorterEditorCtrl.DETAIL_COLUMN_SORTER_ID = "detailColumnSorter";

ColumnSorterEditorCtrl.prototype.getGroupColumnSorterCtrl = function()
{
	return this.groupColumnSorterCtrl;
}
ColumnSorterEditorCtrl.prototype.getDetailColumnSorterCtrl = function()
{
	return this.detailColumnSorterCtrl;
}

ColumnSorterEditorCtrl.prototype.show = function()
{
	this.containerElem.style.display = "block";
}
ColumnSorterEditorCtrl.prototype.hide = function()
{
	this.containerElem.style.display = "none";
}
ColumnSorterEditorCtrl.prototype.showDetailSorter = function()
{
	this.groupColumnSorterCtrl.hide();
	Messages.setElementText("step3ColumnSorterTitle", "step3DetailColumnSorterTitle");
	this.detailColumnSorterCtrl.show();
}
ColumnSorterEditorCtrl.prototype.showGroupSorter = function()
{
	this.detailColumnSorterCtrl.hide();
	Messages.setElementText("step3ColumnSorterTitle", "step3GroupColumnSorterTitle");
	this.groupColumnSorterCtrl.show();
}
